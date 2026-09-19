import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/ohdiljh2u.css';
import '../../css/g/gbv6hcmjx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQs2ujcvJ"><g class="aql7dnt-u"><path clip-rule="evenodd" class="ohdiljh2u"/><path class="gbv6hcmjx"/></g></mask></defs><path mask="url(#SVGQs2ujcvJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:writing-fluently"} {...others} />);
}

export default Component;
