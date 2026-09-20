import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xx-k1vz6a.css';
import '../../css/c/cju0o0byw.css';
import '../../css/q/qij0565wu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xx-k1vz6a"/><path class="cju0o0byw"/><path class="qij0565wu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-graphql"} {...others} />);
}

export default Component;
