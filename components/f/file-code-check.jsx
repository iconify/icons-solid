import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sn9is0bho.css';
import '../../css/n/ny4lcvbjn.css';
import '../../css/n/npmp9m91v.css';
import '../../css/q/qsl3bp3mb.css';
import '../../css/n/nvh4qnjww.css';
import '../../css/j/jghk1jbmw.css';
import '../../css/v/vzu1wdb3i.css';
import '../../css/f/fs_vyob6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sn9is0bho"/><path class="ny4lcvbjn"/><path class="npmp9m91v"/><path class="qsl3bp3mb"/><path class="nvh4qnjww"/><path class="jghk1jbmw"/><path class="vzu1wdb3i"/><path class="fs_vyob6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-code-check"} {...others} />);
}

export default Component;
