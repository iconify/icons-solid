import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xif1tcbsa.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGRu6oNd6B" class="xif1tcbsa"/></defs><use href="#SVGRu6oNd6B"/><use href="#SVGRu6oNd6B"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:instagram"} {...others} />);
}

export default Component;
