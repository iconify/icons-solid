import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttw2t9byb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ttw2t9byb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:layout-distribute-vertical"} {...others} />);
}

export default Component;
