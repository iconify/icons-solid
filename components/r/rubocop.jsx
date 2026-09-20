import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr4rpnb-k.css';
import '../../css/a/a698f-07m.css';
import '../../css/y/y_7o9gs7y.css';
import '../../css/i/irx0otbff.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gr4rpnb-k"/><path class="a698f-07m"/><path class="y_7o9gs7y"/><path class="irx0otbff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:rubocop"} {...others} />);
}

export default Component;
