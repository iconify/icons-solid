import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qt_dw-i0g.css';
import '../../css/t/t824cqbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qt_dw-i0g"/><path clip-rule="evenodd" class="t824cqbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:ai-shield-fill"} {...others} />);
}

export default Component;
