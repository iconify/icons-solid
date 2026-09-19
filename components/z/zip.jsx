import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g0dbnccie.css';
import '../../css/g/g6jfxzgwh.css';
import '../../css/l/ltrug9brs.css';
import '../../css/g/gq-rtm7ty.css';
import '../../css/d/d48zf2voo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmOY9MQJc"><g class="s9cl3zbei"><path clip-rule="evenodd" class="g0dbnccie"/><path class="g6jfxzgwh"/><path clip-rule="evenodd" class="ltrug9brs"/><path class="gq-rtm7ty"/><path class="d48zf2voo"/></g></mask></defs><path mask="url(#SVGmOY9MQJc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:zip"} {...others} />);
}

export default Component;
