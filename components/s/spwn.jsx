import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwc5kob9j.css';
import '../../css/n/na9-sph2f.css';
import '../../css/s/sq4561bvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g transform="translate(13.512 10.42)scale(.06153)"><circle class="uwc5kob9j"/><circle class="na9-sph2f"/><path class="sq4561bvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:spwn"} {...others} />);
}

export default Component;
