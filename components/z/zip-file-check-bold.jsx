import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-dnevyfw.css';
import '../../css/m/mw0fk06ms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u-dnevyfw"/><path class="mw0fk06ms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:zip-file-check-bold"} {...others} />);
}

export default Component;
