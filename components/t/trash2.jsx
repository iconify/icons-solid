import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr2arq_kw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tr2arq_kw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:trash2"} {...others} />);
}

export default Component;
