import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.b9r-16fsm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 2.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M.5 10a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0");
}
</style><path clip-rule="evenodd" class="b9r-16fsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:circle-big"} {...others} />);
}

export default Component;
