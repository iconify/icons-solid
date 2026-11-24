import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.esa3eo6hx {
  fill: currentColor;
  d: path("M21.901 8H2.099A5.01 5.01 0 0 1 7 4h10a5.01 5.01 0 0 1 4.901 4M2 10h8v9a1 1 0 0 1-1 1H7a5 5 0 0 1-5-5Zm17.321 7.907l2.386 2.386a.999.999 0 1 1-1.414 1.414l-2.386-2.386a3.83 3.83 0 1 1 1.414-1.414m-2.028-.614a1.829 1.829 0 1 0-2.587-2.586a1.829 1.829 0 0 0 2.587 2.586");
}
</style><path class="esa3eo6hx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-search-corner-fill-round"} {...others} />);
}

export default Component;
