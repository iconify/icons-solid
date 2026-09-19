import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zp9x9evsj {
  fill: currentColor;
  d: path("M2 7h2v7H2zm18 3h2v7h-2zM6 2v20h12V2zm10 15H8V7h8z");
}
</style><path class="zp9x9evsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-edgesensor-low"} {...others} />);
}

export default Component;
