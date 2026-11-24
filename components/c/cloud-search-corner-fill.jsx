import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cftt4ccmy {
  fill: currentColor;
  d: path("M7 20a6 6 0 0 1-.74-11.955c.742-2.012 2.206-3.704 4.274-4.403c2.856-.964 5.823.266 7.337 2.833c.419.717.721 1.496.896 2.307A.998.998 0 0 1 17.791 10H10a.997.997 0 0 0-1 1v8a1 1 0 0 1-1 1Zm12.321-2.093l2.386 2.386a.999.999 0 1 1-1.414 1.414l-2.386-2.386a3.83 3.83 0 1 1 1.414-1.414m-2.028-.614a1.829 1.829 0 1 0-2.587-2.586a1.829 1.829 0 0 0 2.587 2.586");
}
</style><path class="cftt4ccmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cloud-search-corner-fill"} {...others} />);
}

export default Component;
