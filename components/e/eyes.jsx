import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gnn4r00pv.css';
import '../../css/d/d3vspubye.css';
import '../../css/d/d-pwrfb4u.css';
import '../../css/u/urgb9ibnu.css';
import '../../css/s/sp6yobbhc.css';
import '../../css/f/f22d_ugon.css';
import '../../css/s/sayzt3b5y.css';
import '../../css/z/z4ccmkcna.css';
import '../../css/d/d5j090brh.css';
import '../../css/y/y4-gy9b5f.css';
import '../../css/n/n5ft8fb6u.css';
import '../../css/y/ym2xo7btg.css';

const viewBox = {"width":72,"height":72};
const content = `<ellipse class="gnn4r00pv"/><ellipse class="d3vspubye"/><ellipse class="d3vspubye"/><circle class="d-pwrfb4u"/><ellipse class="gnn4r00pv"/><circle class="urgb9ibnu"/><ellipse class="sp6yobbhc"/><ellipse class="f22d_ugon"/><circle class="sayzt3b5y"/><circle class="z4ccmkcna"/><circle class="d5j090brh"/><circle class="y4-gy9b5f"/><circle class="n5ft8fb6u"/><circle class="ym2xo7btg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:eyes"} {...others} />);
}

export default Component;
