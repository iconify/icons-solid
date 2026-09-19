import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mlcl5fsvr.css';
import '../../css/y/y-rlg20sg.css';
import '../../css/b/bi209sbha.css';
import '../../css/w/wguk6zqch.css';
import '../../css/n/nszo51bwe.css';
import '../../css/e/es4iaf24g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVJbcac8F"><g class="ft5dv1b6b"><rect transform="rotate(-90 5 42)" class="mlcl5fsvr"/><path class="y-rlg20sg"/><circle class="bi209sbha"/><circle class="wguk6zqch"/><circle class="nszo51bwe"/><path class="es4iaf24g"/></g></mask></defs><path mask="url(#SVGVJbcac8F)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:tickets-one"} {...others} />);
}

export default Component;
