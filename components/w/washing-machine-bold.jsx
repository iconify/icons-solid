import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kod2frlkh.css';
import '../../css/k/k_dz1obwi.css';
import '../../css/t/tr03jc-wq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kod2frlkh"/><path class="k_dz1obwi"/><path clip-rule="evenodd" class="tr03jc-wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:washing-machine-bold"} {...others} />);
}

export default Component;
