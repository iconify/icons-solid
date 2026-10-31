import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/d/d_t5xd_me.css';
import '../../css/a/ak_ef83sg.css';
import '../../css/o/oyqncfs_p.css';
import '../../css/x/xjf6l1b6c.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="d_t5xd_me"/><path class="ak_ef83sg"/><path class="oyqncfs_p"/><path class="xjf6l1b6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:malaysia"} {...others} />);
}

export default Component;
