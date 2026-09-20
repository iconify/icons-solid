import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ezdepyalu {
  fill: currentColor;
  d: path("M5 10a1 1 0 1 0-2 0a1 1 0 0 0 2 0M4 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m14 2a.5.5 0 0 1-.5.5H9.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L9.707 9.5H17.5a.5.5 0 0 1 .5.5");
}
</style><path class="ezdepyalu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-step-in-left-20-regular"} {...others} />);
}

export default Component;
