import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/r/r5tlskk2v.css';
import '../../css/c/c318wxfqg.css';
import '../../css/m/m9zkpabmw.css';
import '../../css/b/bgqoji13c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGhr7QBbVO"><g class="ufeehvblu"><path class="r5tlskk2v"/><path class="c318wxfqg"/><path class="m9zkpabmw"/><path class="bgqoji13c"/></g></mask></defs><path mask="url(#SVGhr7QBbVO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:stopwatch-start"} {...others} />);
}

export default Component;
