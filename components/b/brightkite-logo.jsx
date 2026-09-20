import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/t/tbos5abqc.css';
import '../../css/t/tycpr5b0m.css';
import '../../css/t/tglh5kq5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="tbos5abqc"/><path class="tycpr5b0m"/><path class="tglh5kq5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:brightkite-logo"} {...others} />);
}

export default Component;
