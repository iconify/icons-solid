import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6h3gr4bu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="z6h3gr4bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:definition-search-book"} {...others} />);
}

export default Component;
