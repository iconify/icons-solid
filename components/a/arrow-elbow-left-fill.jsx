import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pfcfmn5ap {
  fill: currentColor;
  d: path("m237.66 101.66l-96 96a8 8 0 0 1-11.32 0L60 127.31l-30.34 30.35A8 8 0 0 1 16 152V80a8 8 0 0 1 8-8h72a8 8 0 0 1 5.66 13.66L71.31 116L136 180.69l90.34-90.35a8 8 0 0 1 11.32 11.32");
}
</style><path class="pfcfmn5ap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-left-fill"} {...others} />);
}

export default Component;
