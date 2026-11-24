import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g3o53pbqe {
  fill: currentColor;
  d: path("M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V6h-2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V6H6v14h3a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3Zm11.321 14.907l2.386 2.386a.999.999 0 1 1-1.414 1.414l-2.386-2.386a3.83 3.83 0 1 1 1.414-1.414m-2.028-.614a1.829 1.829 0 1 0-2.587-2.586a1.829 1.829 0 0 0 2.587 2.586");
}
</style><path class="g3o53pbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clipboard-search-corner-fill-sharp"} {...others} />);
}

export default Component;
