import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xbtzhdc8r.css';
import '../../css/t/tcotrub1g.css';
import '../../css/e/ez1x61b2a.css';
import '../../css/v/v9z7ezbah.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xbtzhdc8r"/><path class="tcotrub1g"/><circle class="ez1x61b2a"/><path class="v9z7ezbah"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mail-search"} {...others} />);
}

export default Component;
