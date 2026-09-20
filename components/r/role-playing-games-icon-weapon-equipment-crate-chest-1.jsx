import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f8_yxzbej.css';
import '../../css/g/g3azem9gj.css';
import '../../css/z/z-dp3fbdb.css';
import '../../css/n/n5kknrbif.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="f8_yxzbej"/><path class="g3azem9gj"/><path class="z-dp3fbdb"/><path class="n5kknrbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:role-playing-games-icon-weapon-equipment-crate-chest-1"} {...others} />);
}

export default Component;
