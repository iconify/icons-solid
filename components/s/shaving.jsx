import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/j/jmot6bbfp.css';
import '../../css/u/ubuh6kbkg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGihhyQbyX"><g class="aql7dnt-u"><rect class="jmot6bbfp"/><path class="ubuh6kbkg"/></g></mask></defs><path mask="url(#SVGihhyQbyX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:shaving"} {...others} />);
}

export default Component;
