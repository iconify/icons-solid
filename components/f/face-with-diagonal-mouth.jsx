import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_ywjjbch.css';
import '../../css/h/hrsbdbc-d.css';
import '../../css/e/e-qaj9bzm.css';
import '../../css/a/a50a-ab_g.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="k_ywjjbch"/><circle class="hrsbdbc-d"/><path class="e-qaj9bzm"/><path class="a50a-ab_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:face-with-diagonal-mouth"} {...others} />);
}

export default Component;
