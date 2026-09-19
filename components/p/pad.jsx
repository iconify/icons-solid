import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o2o_b7-ab.css';
import '../../css/l/lgj4kaccc.css';
import '../../css/e/eswq9z27o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaIsEZUpE"><g class="ft5dv1b6b"><path class="o2o_b7-ab"/><path class="lgj4kaccc"/><path class="eswq9z27o"/></g></mask></defs><path mask="url(#SVGaIsEZUpE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pad"} {...others} />);
}

export default Component;
