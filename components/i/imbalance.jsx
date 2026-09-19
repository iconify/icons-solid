import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/d08qanr9p.css';
import '../../css/g/gl1hokdww.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaFxh4cRS"><g class="aql7dnt-u"><path class="d08qanr9p"/><path clip-rule="evenodd" class="gl1hokdww"/></g></mask></defs><path mask="url(#SVGaFxh4cRS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:imbalance"} {...others} />);
}

export default Component;
