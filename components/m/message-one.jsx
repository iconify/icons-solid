import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/h/h3mxyjh3o.css';
import '../../css/t/t43uemldg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWCI2renM"><g class="gopnm44um"><path class="h3mxyjh3o"/><path class="t43uemldg"/></g></mask></defs><path mask="url(#SVGWCI2renM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:message-one"} {...others} />);
}

export default Component;
