import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qek2tkbit.css';
import '../../css/m/m0n_d7bih.css';
import '../../css/t/tt--df6_y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWQkecbTQ"><g class="s9cl3zbei"><rect class="qek2tkbit"/><path class="m0n_d7bih"/><path class="tt--df6_y"/></g></mask></defs><path mask="url(#SVGWQkecbTQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:f-eight-key"} {...others} />);
}

export default Component;
