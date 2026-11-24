import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jsecsgbth {
  fill: currentColor;
  d: path("m4.414 5l-1-1h17.172l-6 6H9.414ZM2 19V5.414l6.293 6.293A1 1 0 0 0 9 12h3v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m14.414-8L22 5.414V11a1 1 0 0 1-1 1h-5.586Zm4.907 8.907l1.386 1.386a.999.999 0 1 1-1.414 1.414l-1.386-1.386a3.83 3.83 0 1 1 1.414-1.414m-2.028-.614a1.829 1.829 0 1 0-2.587-2.586a1.829 1.829 0 0 0 2.587 2.586");
}
</style><path class="jsecsgbth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mail-search-corner-fill-sharp"} {...others} />);
}

export default Component;
