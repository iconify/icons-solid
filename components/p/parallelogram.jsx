import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gpw5kfbgi {
  fill: currentColor;
  d: path("M245.43 47.31A15.94 15.94 0 0 0 232 40H88.81a16 16 0 0 0-14.59 9.43l-64.8 144A16 16 0 0 0 24 216h143.19a16 16 0 0 0 14.59-9.43l64.8-144a16 16 0 0 0-1.15-15.26M167.19 200H24L88.81 56H232Z");
}
</style><path class="gpw5kfbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:parallelogram"} {...others} />);
}

export default Component;
