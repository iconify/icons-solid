import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/z/zm1am8zwq.css';
import '../../css/g/ghilmzbaa.css';
import '../../css/a/a_66_cbsw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGJQBRUoTK"><g class="hv130ab-t"><path class="zm1am8zwq"/><path class="ghilmzbaa"/><path class="a_66_cbsw"/></g></mask></defs><path mask="url(#SVGJQBRUoTK)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:align-left-one"} {...others} />);
}

export default Component;
