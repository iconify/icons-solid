import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/olsu_qbnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="olsu_qbnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:bag-suitcase-add-plus-remix"} {...others} />);
}

export default Component;
