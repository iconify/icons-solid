import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/la0_fqkid.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ktnqlxbec.css';
import '../../css/y/yn5fphbsc.css';
import '../../css/o/o36i6xwrw.css';
import '../../css/m/m79smdbvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="la0_fqkid secondary"/><g class="dt0cm9dhy primary"><path class="ktnqlxbec"/><path class="yn5fphbsc"/><path class="o36i6xwrw"/><path class="m79smdbvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:goal-duo"} {...others} />);
}

export default Component;
