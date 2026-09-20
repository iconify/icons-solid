import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o047_ie0t {
  fill: currentColor;
  d: path("M9 17.5h6q.213 0 .356-.144t.144-.357t-.144-.356T15 16.5H9q-.213 0-.356.144t-.144.357t.144.356T9 17.5m0-4h6q.213 0 .356-.144t.144-.357t-.144-.356T15 12.5H9q-.213 0-.356.144t-.144.357t.144.356T9 13.5M6.616 21q-.691 0-1.153-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3h7.213q.331 0 .632.13t.518.349L18.52 7.02q.217.218.348.518t.131.632v11.214q0 .69-.463 1.153T17.385 21zM14 7.2q0 .34.23.57t.57.23H18l-4-4z");
}
</style><path class="o047_ie0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:description-rounded"} {...others} />);
}

export default Component;
