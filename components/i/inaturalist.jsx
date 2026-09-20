import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a89ur2b1j.css';
import '../../css/x/x15omc94k.css';
import '../../css/a/alf0loboi.css';
import '../../css/v/vr7_nrb-q.css';
import '../../css/s/s4wohcc5l.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="a89ur2b1j"/><path class="x15omc94k"/><circle class="alf0loboi"/><path class="vr7_nrb-q"/><path class="s4wohcc5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:inaturalist"} {...others} />);
}

export default Component;
