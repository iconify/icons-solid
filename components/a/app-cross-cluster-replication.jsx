import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hb78y2rwy.css';
import '../../css/t/tm8w-yurb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hb78y2rwy"/><path class="ouiIcon__fillSecondary tm8w-yurb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-cross-cluster-replication"} {...others} />);
}

export default Component;
