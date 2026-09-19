import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qfm8izowj.css';
import '../../css/y/yhit36cnb.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGdzsPodEZ"><g class="aql7dnt-u"><path class="qfm8izowj"/><path class="yhit36cnb"/></g></mask></defs><path mask="url(#SVGdzsPodEZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cylinder"} {...others} />);
}

export default Component;
