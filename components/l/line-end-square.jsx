import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zi8qtf5tx {
  fill: currentColor;
  d: path("M12.577 15.923V12.5h-9.5v-1h9.5V8.077h7.846v7.846z");
}
</style><path class="zi8qtf5tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:line-end-square"} {...others} />);
}

export default Component;
