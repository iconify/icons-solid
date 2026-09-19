import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/s0v8y9x4x.css';
import '../../css/t/twqpbnfaj.css';
import '../../css/f/f8hkl4znj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="s0v8y9x4x"/><path class="twqpbnfaj"/><path class="f8hkl4znj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-image-bold"} {...others} />);
}

export default Component;
