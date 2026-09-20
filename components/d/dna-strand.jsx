import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzp8_ubtw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jzp8_ubtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:dna-strand"} {...others} />);
}

export default Component;
