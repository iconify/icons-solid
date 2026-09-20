import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.aa3nkpbzl {
  fill: currentColor;
  d: path("M128 36h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm68-172h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4ZM68 128a4 4 0 0 1-4 4H44v20a4 4 0 0 1-8 0v-20H16a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4");
}
</style><path class="aa3nkpbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:columns-plus-left-thin"} {...others} />);
}

export default Component;
