import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o_n15abxo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o_n15abxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:south-east-escape-alt-fill"} {...others} />);
}

export default Component;
