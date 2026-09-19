import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rojie2byc.css';
import '../../css/z/zooty4bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rojie2byc"/><path class="zooty4bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:currency-notes-filled"} {...others} />);
}

export default Component;
