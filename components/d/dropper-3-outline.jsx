import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/er09-obpj.css';
import '../../css/w/w_8qokj7u.css';
import '../../css/k/ku79fqbff.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="er09-obpj"/><path class="w_8qokj7u"/><path clip-rule="evenodd" class="ku79fqbff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dropper-3-outline"} {...others} />);
}

export default Component;
