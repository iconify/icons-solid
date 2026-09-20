import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n_vh5qbuv {
  fill: currentColor;
  d: path("M228 48v160a20 20 0 0 1-20 20h-68a12 12 0 0 1 0-24h64V52H52v88a12 12 0 0 1-24 0V48a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-99.51 103.51a12 12 0 0 0-17 0L64 199l-15.51-15.49a12 12 0 1 0-17 17l24 24a12 12 0 0 0 17 0l56-56a12 12 0 0 0 0-17");
}
</style><path class="n_vh5qbuv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:check-square-offset-bold"} {...others} />);
}

export default Component;
