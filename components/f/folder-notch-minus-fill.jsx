import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tfoe0bcku {
  fill: currentColor;
  d: path("M216 72h-85.34l-27.74-20.8a16 16 0 0 0-9.58-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16M40 96V64h53.34l21.33 16l-21.34 16Zm112 64h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16");
}
</style><path class="tfoe0bcku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:folder-notch-minus-fill"} {...others} />);
}

export default Component;
