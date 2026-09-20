import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.w3ccpjbgn {
  fill: currentColor;
  d: path("M192 148H64a12 12 0 0 1 0-24h128a12 12 0 0 1 0 24m40-72H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24m-104 96h-24a12 12 0 0 0 0 24h24a12 12 0 0 0 0-24m96.49-4.49a12 12 0 0 0-17 0L192 183l-15.51-15.52a12 12 0 0 0-17 17L175 200l-15.52 15.51a12 12 0 0 0 17 17L192 217l15.51 15.52a12 12 0 0 0 17-17L209 200l15.52-15.51a12 12 0 0 0-.03-16.98");
}
</style><path class="w3ccpjbgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:funnel-simple-x-bold"} {...others} />);
}

export default Component;
