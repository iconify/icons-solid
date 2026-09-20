import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/v/v7rtunbwn.css';
import '../../css/t/tu6hf7byk.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGfGA9Aeaq"><g class="o58hkebvg"><path class="v7rtunbwn"/><path class="tu6hf7byk"/></g></mask></defs><path mask="url(#SVGfGA9Aeaq)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:road-alt-duotone-line"} {...others} />);
}

export default Component;
