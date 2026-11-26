import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hp_8std-m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 20L2 20C1.4477 20 1 19.5523 1 19L1 10C1 9.7348 1.1054 9.4804 1.2929 9.2929L6.2929 4.2929C6.4804 4.1054 6.7348 4 7 4L17 4C17.2652 4 17.5196 4.1054 17.7071 4.2929L22.7071 9.2929C22.8946 9.4804 23 9.7348 23 10L23 19C23 19.5523 22.5523 20 22 20Z");
}
</style><path clip-rule="evenodd" class="hp_8std-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:flow-loop-limit-sharp-fill"} {...others} />);
}

export default Component;
