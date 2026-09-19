import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytljj_1kl.css';
import '../../css/p/peznpibsk.css';
import '../../css/f/forcaublo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGoN2qMc1Z"><g class="ft5dv1b6b"><path class="ytljj_1kl"/><path class="peznpibsk"/><path class="forcaublo"/></g></mask></defs><path mask="url(#SVGoN2qMc1Z)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hotel-please-clean"} {...others} />);
}

export default Component;
